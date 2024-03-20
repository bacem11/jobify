import  User  from '../models/User.js'
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';
 

const register = async (req, res,next) => {
    const {name,email,password} = req.body
    if(!name || !email || !password){
        throw new BadRequestError('please provide all values ')
    }
    
    const userAlreadyExists = await User.findOne({ email }).maxTimeMS(30000);
    if(userAlreadyExists){
        throw new BadRequestError('email already in use')
    } 
    const user =  await User.create(name,email,password)
    const token =User.createJWT()
    res.status(StatusCodes.OK).json({ user:{
        email:user.email,
        lastname: user.lastname,
        location: user.location,
        name: user.name,

    },token  })
    
};

const login = async (req, res) => {
    res.send('login user');
};

const updateUser = async (req, res) => {
    res.send('updateUser');
    
};

export default { register, login, updateUser };
