module.exports = class UserDto {
    email;
    id;
    isActivated;
    first_name;
    last_name;
    history;
    orderNumber;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.first_name = model.first_name;
        this.last_name = model.last_name;
        this.history = model.history;
        this.orderNumber = model.orderNumber;
    }
}