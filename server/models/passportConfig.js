const LocalStrategy = require("passport-local");
const { emailExists, createUser, matchPassword } = require("../utils/helper");

module.exports = (passport) => {
    passport.use(
      "local-signup",
      new LocalStrategy(
          // sign up
      )
    );
    passport.use(
      "local-login",
      new LocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
        },
        async (email, password, done) => {
          try {
            const user = await emailExists(email);
            if (!user) return done(null, false);
            const isMatch = await matchPassword(password, user.password);
            if (!isMatch) return done(null, false);
            return done(null, {id: user.id, email: user.email});
          } catch (error) {
            return done(error, false);
          }
        }
      )
    );
  };