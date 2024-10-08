export const register = (req, res, next) => {
    try {
        res.json('User register!');
    } catch (error) {
        next(error);
    }
}

export const logIn = (req, res, next) => {
   try {
     res.json('User logged in!');
   } catch (error) {
    next(error);
   }
}

export const logOut = (req, res, next) => {
    try {
        res.json('User logged out!');
    } catch (error) {
        next(error);
    }
}

// here is her