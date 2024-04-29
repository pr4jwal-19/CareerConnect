
import { useState } from "react";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";

const Component = styled(Box)({
    padding: '80px 200px',
    background: '#DADFF7'
})

const Container = styled(Box)({
    display: 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 75px',
    '& > p': {
        fontSize: 32,
        fontWeight: 700,
        letterSpacing: -1
    }
})

const FormWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    padding: 20,
    background: '#FFFFFF',
    borderRadius: 20,
    '& > *': {
        marginTop: '20px !important'
    },
    '& > button': {
        background: '#232C33'
    }
})

const defaultObj = {
    profile:"",
    type:"",
    description:"",
    experience:"",
    technology: [],
    salary:""
}

const options = {
    type: ["Online","Remote"],
    experience: ["0-2 Years","3-5 Years","6-9 Years","10+ Years"],
    technology: ["C/C++","Java","Python","Spring Boot","MySQL","PostgreSQL","React","Angular/Vue","Django","Html/CSS","Javascript","AWS","Git"],
    salary: ["Rs.0-3,00,000","Rs.3,00,000-5,00,000","Rs.5,00,000-8,00,000","Rs.8,00,000-13,00,000","Above Rs.13,00,000"]
}


const CreatePost = () => {

    const [data,setData] = useState(defaultObj);

    const navigate = useNavigate();

    const postIcon = "https://cdn.dribbble.com/users/8834011/screenshots/16399424/media/6405f846ab5fd3d3731561af5a52443c.jpg?resize=1000x750&vertical=center";

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const saveJob = async () => {
        await savePost(data);
        navigate(routePath.posts)
    }
    
    return (
        <>
            <Header />
            <Component>

                <Container>

                    <Typography>Create a Job Post</Typography>
                    <img src={postIcon} alt="post" style={{width: 180,height: 120}}/>

                </Container>

                {/* Form Here */}
                <FormWrapper>

                    <TextField placeholder="Enter Job Title"
                     name="profile"
                     onChange={handleChange}
                     variant="standard"/>
                    <Dropdown

                        label = "Job Type"
                        id = "job-type-label"
                        value = {data.type}
                        handleChange = {handleChange}
                        name = "type"
                        options = {options.type} 

                    />
                    <TextField placeholder="Enter Job Description"
                     name="description"
                     onChange={handleChange}
                     variant="standard" />
                    <Dropdown

                        label = "Experience"
                        id = "job-experience-label"
                        value = {data.experience}
                        handleChange = {handleChange}
                        name="experience"
                        options = {options.experience}

                    />
                    <Dropdown 

                        label = "Technology"
                        id = "job-technology-label"
                        value = {data.technology}
                        handleChange = {handleChange}
                        name="technology"
                        options = {options.technology}
                        multiple

                    />
                    <Dropdown 

                        label = "Salary"
                        id = "job-salary-label"
                        value = {data.salary}
                        handleChange = {handleChange}
                        name="salary"
                        options = {options.salary}

                    />
                    <Button onClick={() => saveJob() } variant="contained">Save Job</Button>

                </FormWrapper>

            </Component>
            
        </>
    )

}

export default CreatePost;