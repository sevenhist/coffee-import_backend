const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        console.log(process.env.SMTP_USER)
        console.log(process.env.SMTP_PASSWORD)
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активація аккаунта на ' + process.env.API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>Для активації перейдіть по ссилці</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }
    async sendCartMail(last_name, first_name, phone_number, email, city, delivery, cart, activePay, totalPrice, dateInfo, timeInfo, link) {
        function generateDeliveryText(value) {
            if (value.postamt !== undefined) {
                return "Самовивіз із поштомата Нової пошти";
            } else if (value.postOffice !== undefined) {
                return "Самовивіз із відділення Нової пошти.";
            } else if (value.courier !== undefined && !value.courier.includes("undefined")) {
                return "Кур'єрська доставка Новою Поштою";
            } else {
                return ""; 
            }
        }
        const deliveryText = generateDeliveryText(delivery)
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'sevenhist@gmail.com',
            subject: 'Вітаємо з покупкою',
            text: '',
            html:
                `
            <div style="max-height: 1200px;">
                <div style="height: 100%; display: flex; align-items: start; justify-content: left;">
                    <div style="height: 100%; gap: 30px;">
                        <div style="gap: 10px;">
                            <h1 style="font-size: 24px; font-weight: 700; color: #142257;">Контакти</h1>
                            <ul style="list-style-type: none; padding: 0px;"> <!-- Entferne flex-Eigenschaften und setze list-style-type und padding auf die UL-Elemente -->
                                <li style="font-size: 17px;">Імʼя: ${first_name}</li>
                                <li style="font-size: 17px;">Прізвище: ${last_name}</li>
                                <li style="font-size: 17px;">Телефон: ${phone_number}</li>
                                <li style="font-size: 17px;">Електронна пошта: <a style="cursor: pointer;" href=${email}>${email}</a></li>
                            </ul>
                        </div>
                        <div style="gap: 10px;">
                            <h1 style="font-size: 24px; font-weight: 700; color: #142257;">Дані для відправки</h1>
                            <ul style="list-style-type: none; padding: 0px;"> <!-- Entferne flex-Eigenschaften und setze list-style-type und padding auf die UL-Elemente -->
                                <li style="font-size: 17px;"> Місто: ${city}</li>
                                <li style="font-size: 17px;"> Спосіб доставки: ${deliveryText}</li>
                                <li style="font-size: 17px;">Адреса: ${delivery.postamt !== undefined ? delivery.postamt : delivery.postOffice !== undefined ? delivery.postOffice : delivery.courier?.includes("undefined") ? "" : delivery.courier}</li>
                                <li style="font-size: 17px;">Спосіб оплати: ${activePay}</li>
                             </ul>
                        </div>
                        <div style="gap: 10px;">
                            <h1 style="font-size: 24px; font-weight: 700; color: #142257;">Кошик</h1>
                            ${cart.map((item) => {
                            return `
                                <ul style="list-style-type: none; padding: 0px;"> <!-- Entferne flex-Eigenschaften und setze list-style-type und padding auf die UL-Elemente -->
                                    <li style="font-size: 17px; display: flex; align-item: center; column-gap: 5px;">
                                        <img style="max-width: 140px; max-height: 140px; width: 100%; height: 100%;" src=${item.img} />
                                        <p>${item.title}</p>
                                    </li>
                                    <li style="font-size: 17px;">Кількість: ${item.count}шт</li>
                                    <li style="font-size: 17px;">Ціна: ${item.price}</li>
                                </ul>`; 
                            }).join('')}
                        </div>
                        <div style="gap: 10px;">
                            <h1 style="font-size: 24px; font-weight: 700; color: #142257;">Загальна ціна: ${totalPrice}</h1>
                        </div>
                    </div>
                </div>
            </div>
                `
        })
    }
    /* 
    ${cart.map((item) => {
                        return `<div>${item.title}</div>`; 
                    }).join('')}
    */
}

module.exports = new MailService();