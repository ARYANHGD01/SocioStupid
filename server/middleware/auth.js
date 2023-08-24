import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            console.log("Token missing, Access Denied");
            return res.status(403).send("Access Denied");
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        console.log("Verifying token:", token);
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Token verified:", verified);

        req.user = verified;
        next();

    } catch (err) {
        console.error("Token verification error:", err);
        res.status(500).json({ error: err.message });
    }
}
