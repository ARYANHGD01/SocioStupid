import User from "../models/User.js";
import Post from "../models/Post.js"

export const createPost = async (req, res) => {
    try {
        const {userId, description, picturepath } = req.body;
        console.log("Recieved userId", userId);
        console.log("Received description:", description);
        console.log("Received picturepath:", picturepath);
        const user = await User.findById(userId);
        if (!user) {
            console.error("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        const newPost = new Post ({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturepath,
            likes: {},
            comments: []
        })
        await newPost.save();

        const post = await Post.find();

        res.status(201).json(post);

    } catch (err) {
        console.error("Error creating post", err);
        res.status(409).json({message: err.message})
    }
}

export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const getUserPosts = async(req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const likePost = async(req, res) => {
    try {
        const { id } = req.params;
        const { userId} = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        } else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { likes: post.likes },
            { new: true }
        );

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}