const Service = require("./service");
const db = require("../models/");
const { sequelize } = require("../models");
const { deleteFiles } = require("../helper/deleteFile");

class UserService extends Service {
    static editUser = async (users_id, body) => {
        try {
            const findUser = await db.users.findByPk(users_id);

            if (!findUser) {
                return this.handleError({
                    statusCode: 404,
                    message: `User with ID: ${users_id} not Found!`,
                });
            }

            const editUserData = await db.users.update(
                {
                    fullname: body.fullname,
                },
                {
                    where: {
                        id: users_id,
                    },
                }
            );

            return this.handleSuccess({
                message: "User Edit Success",
                statusCode: 200,
                data: editUserData,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static editUserAvatar = async (id, files) => {
        try {
            const findUser = await db.users.findOne({
                where: {
                    id: id
                },
            });

            if (!findUser) {
                return this.handleError({
                    message: "No user found!",
                    statusCode: 404,
                });
            }

            const dataImage = files.images.map((value) => {
                return {
                    image: value.path,
                };
            });

            console.log(dataImage)

            // await deleteFiles({
            //     images: [{ path: findUser.dataValues.avatar }],
            // });

            const updateImage = await db.users.update(
                { avatar: dataImage[0].image },
                { where: { id: id } }
            );

            return this.handleSuccess({
                message: "Profile Picture Updated!",
                statusCode: 200,
                data: updateImage,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    };

    static changePrimaryAddress = async(users_id, address_id) => {
        try {
            const findUser = await db.users.findOne({
                where: {
                    id: users_id,
                },
            });

            if (!findUser) {
                return this.handleError({
                    message: "No user found!",
                    statusCode: 404,
                });
            }

            await db.users_addresses.update(
                {
                    is_primary: false
                },{
                where: {
                    users_id
                }
            })

            const changeAddress = await db.users_addresses.update({
                is_primary: true
            },
            {
                where: {
                    id: address_id,
                    users_id
                }
            })

            return this.handleSuccess({
                message: "Success set primary address.",
                statusCode: 200,
                data: changeAddress,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    }

    static deleteAddress = async(address_id) => {
        try {

            const deleteUserAddress = await db.users_addresses.destroy(
            {
                where: {
                    id: address_id,
                }
            })

            return this.handleSuccess({
                message: "Success delete address!",
                statusCode: 200,
                data: deleteUserAddress,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    }

    static getAddresses = async(users_id) => {
        try {
            const getUserAddress = await db.users_addresses.findAll({
                where: {
                    users_id
                }
            })

            return this.handleSuccess({
                message: "Success get addresses!",
                statusCode: 200,
                data: getUserAddress,
            });
        } catch (error) {
            console.log(error);
            return this.handleError({
                statusCode: 500,
                message: "Server Error",
            });
        }
    }
}

module.exports = UserService;
