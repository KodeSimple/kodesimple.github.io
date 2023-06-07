const usersModel = require('../models/users.mongo');

/////-----------------get all users block scope starts here------------//////////
async function getAllUsers(req, res) {
  try {
    const allUsers = await usersModel.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function productList(req, res) {
  try {
    const { userName } = req.body;
    const user = await usersModel.findOne({ userName: userName });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const productList = user.productList;
    res.status(200).json(productList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
/////-----------------get all users block scope ends here------------//////////
///////--------------------add product block scope starts here/--------------------///////////
async function addProduct(req, res) {
  const { userId, entryDate, serialNo, category, itemDescription, qty, buyPrice, sellPrice } = req.body;
  try {
    const user = await usersModel.findOne({ userName: userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const profit = (sellPrice - buyPrice) * qty;
    const newProduct = {
      userId: userId,
      entryDate: entryDate,
      serialNo: serialNo,
      category: category,
      itemDescription: itemDescription,
      qty: qty,
      buyPrice: buyPrice,
      sellPrice: sellPrice,
      profit: profit,
    };

    user.productList.push(newProduct); // Add the new product to the user's productList array
    await user.save();

    res.status(200).json({ message: 'Item added successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

/////------------------------end of addPoduct block scope---------------------/////////
/////-----------------change password user block scope starts here------------//////////
async function changePassword(req, res) {
  const { userName, password } = req.body;

  try {
    const user = await usersModel.findOne({ userName: userName });

    if (user) {
      user.password = password;
      await user.save();
      res.send(`User ${userName}'s password has been updated`);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
/////-----------------change password user block scope ends here------------//////////
/////-----------------addNew user block scope starts here-------------------------------------//////////
async function addUser(req, res) {
  const { businessName, firstName, lastName, userName, email, password, confirmPassword, productList, salesList, remainingProduct } = req.body;

  if (password !== confirmPassword) {
    return res.status(200).json({ status: false, errorName: 'confirmPassword', message: 'Password does not match' });
  }

  if (!email || !password || !firstName || !lastName) {
    return res.status(200).json({ status: false, errorName: 'validation', message: 'Invalid user data' });
  }

  const existingUser = await usersModel.findOne({ $or: [{ email: email }, { userName: userName }] });

  if (existingUser) {
    return res.status(200).json({ status: false, errorName: 'emailExist', message: 'Username or Email already exists' });
  }

  const newUser = new usersModel({
    businessName,
    firstName,
    lastName,
    userName,
    email,
    password,
    confirmPassword,
    productList: productList || [],
    salesList: salesList || [],
    remainingProduct: remainingProduct|| [],
  });

  await newUser.save();
  res.status(200).json({ status: true, message: 'User successfully registered' });
}
//////-----------------------end of addUser block--------------------------------/////////
/////-------------------log in block scoope code starts here---------------------////////
async function login(req, res) {
  const { userName, password } = req.body;

  try {
    const user = await usersModel.findOne({ userName: userName, password: password });

    if (user) {
      res.status(200).json({
        status: true,
        message: 'Login successful',
        userName: user.userName,
      });
    } else {
      res.status(200).json({
        status: false,
        message: 'Login failed, wrong credentials',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
/////-------------------log in block scoope code ends here---------------------////////
module.exports = {
  getAllUsers,
  changePassword,
  addUser,
  login,
  productList,
  addProduct,
};

