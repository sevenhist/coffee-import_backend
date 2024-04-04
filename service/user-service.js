const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
let history = require("../shopData/history");

class UserService {
    async registration(email, password, first_name, last_name) {
        const candidate = await UserModel.findOne({email});
        if (candidate) {
            throw ApiError.BadRequest(`Користувач з такою поштовою адресою ${email} вже існує`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();
        const user = await UserModel.create({email, password: hashPassword, activationLink, first_name, last_name, history: [], orderNumber: 0})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);
        
        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }
    async sendData(last_name, first_name, phone_number, email, city, delivery, cart, activePay, totalPrice, dateInfo, timeInfo, refreshToken) {
        await mailService.sendCartMail(last_name, first_name, phone_number, email, city, delivery, cart, activePay, totalPrice, dateInfo, timeInfo,
        `${process.env.API_URL}/api/send-data`);

        const userData = tokenService.validateRefreshToken(refreshToken);
        const user = await UserModel.findOne({ email: userData.email });
        user.history = [{last_name: last_name, first_name: first_name, phone_number: phone_number, email: email, 
            city: city, delivery: delivery, cart: cart, activePay: activePay, totalPrice: totalPrice, dateInfo: dateInfo, timeInfo: timeInfo}, ...user.history]
        if(user.orderNumber.length === 0) {
            user.orderNumber.push(user.history.length)
        } else { 
            user.orderNumber.unshift(user.history.length)
        }
        await user.save()
        return last_name, first_name, phone_number, email, city, delivery, cart, activePay, totalPrice, dateInfo, timeInfo
    }
    async getHistory() {
        return history
    }
    async setProfilePasswords(new_password, password, refreshToken) {
        const userData = tokenService.validateRefreshToken(refreshToken);
        const user = await UserModel.findOne({ email: userData.email });
        const isPassEquals = await bcrypt.compare(password, user.password);
        const isPassEqualsSecond = await bcrypt.compare(new_password, user.password);
        if(!isPassEquals) {
            throw ApiError.BadRequest("Неправильний пароль");
        } 
        else if(isPassEqualsSecond) {
            console.log("Hello error")
            throw ApiError.BadRequest("Будь ласка не залишайте старий пароль, а створіть краще новий");
        }
        const newHashPassword = await bcrypt.hash(new_password, 3);
        user.password = newHashPassword;
        await user.save()
        return {
            user: user
        }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if(!user) {
            throw ApiError.BadRequest('Некоректна ссилка активації')
        }
        user.isActivated = true;
        await user.save();
    }
    async login(email, password) {
        const user = await UserModel.findOne({email});
        if (!user) {
            throw ApiError.BadRequest("Користувач не знайдений")
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if(!isPassEquals) {
            throw ApiError.BadRequest("Неправильний пароль")
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }
    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async setProfileInfo(email, first_name, last_name) {
        const candidate = await UserModel.findOne({email});
        if (candidate) {
            candidate.first_name = first_name;
            candidate.last_name = last_name;
            await candidate.save();
        }
        return {
            user: candidate
        }
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if(!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findById(userData.id);

        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }

    async getAllUsers() {
        const users = await UserModel.find();
        return users;
    }
}

module.exports = new UserService();