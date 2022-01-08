const GoogleStrategy = require("passport-google-oauth20").Strategy

const passport = require("passport")

const GOOGLE_CLIENT_ID = "1046677605049-3nt535dr2m4lm74ffie232iao35ud91j.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"


passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile)
        }
    )
)



passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});