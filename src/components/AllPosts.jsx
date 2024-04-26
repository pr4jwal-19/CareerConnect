import Header from "./Header";

import { useEffect, useState } from "react";

import { getAllPosts } from "../services/api";
import { Box, Card, CardContent, InputBase, Typography, styled } from "@mui/material";

const SearchWrapper = styled(Box)({
    marginTop: 80,
    display: 'flex',
    justifyContent: 'center',
    '& > div': {
        width: 500,
        height: 45,
        border: '1px solid #767676',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        marginRigth: 20,
        paddingLeft: 10
    }
})

const PostWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
    flexWrap: 'wrap',
    '& > div': {
        border: '1px solid #303036',
        borderRadius: 10,
        margin: 10,
        width: '30%',
        height: 300
    }
})

const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    const [text, setText] = useState("");

    useEffect(() => {
        const getData = async () => {
            const response = await getAllPosts();
            setPosts(response.data)
        }
        getData();
    },[])

    return(
        <>
            <Header/>
            <SearchWrapper>
                <InputBase placeholder="Search by Job Title"
                           onChange={(e) => setText(e.target.value)} 
                />
            </SearchWrapper>
            <PostWrapper>
                {
                    posts.filter(post => post.profile.toLowerCase().includes(text.toLowerCase())).map(post => (
                        <Card>
                            <CardContent>
                                <Typography variant="h5">{post.profile}</Typography>
                                <Typography>{post.type}</Typography>
                                <Typography><b>Salary:</b> {post.salary}</Typography>
                                <Typography
                                    style={{ color: '#050401', margin: '10px 0'}}
                                >{post.description.length > 100 ? post.description.substring(0,150) + "...." : post.description }</Typography>
                                <Typography><b>Experience:</b> {post.experience}</Typography>
                                <Typography><b>Technology:</b> {post.technology}</Typography>
                                <Typography
                                    style={{ color: '#050401', marginTop: 'auto'}}
                                ><b>Posted On:</b> {new Date(post.createdAt).toLocaleDateString()}</Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </PostWrapper>
        </>
    )

}

export default AllPosts;