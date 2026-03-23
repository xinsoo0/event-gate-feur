import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Input from '../components/icons/form/Input'
import Card from '../components/icons/Card'
import SignUpButton from '../components/icons/SignUpButton'

const SignupPage = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const signupForm = {
            firstame: formData.get("firstname"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            password: formData.get("password")
        }
        // console.log("signupForm", signupForm)
        const { data, error } = await supabase.auth.signUp({
            email: signUpForm.email,
            password: signUpForm.password,
        })
        if (error) alert(error)
        if (data) console.log(data)
    }
    return (
        <MainLayout>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96">
                    <Card>
                        <h1 className="text-2xl font-bold mb-4 text-center"> Sign-up Form</h1>
                        <form onSubmit={handleSubmit}>
                            <Input
                                name="firstname"
                                placeholder="Enter Your First Name"
                                label="Firstname"
                                type="text"
                            />
                            <Input
                                name="lastname"
                                placeholder="Enter Your Last Name"
                                label="Lastname"
                                type="text"
                            />
                            <Input
                                name="email"
                                placeholder="Enter Your Email"
                                label="Email"
                                type="text"
                            />
                            <Input
                                name="Password"
                                placeholder="Enter Your Password"
                                label="Password"
                                type="password"
                            />
                            <button
                                className="btn btn-primary rounded-full w-full mt-4 flex items-center justify-center gap-1">
                                <SignUpButton className="text-sm" />
                                Submit
                            </button>
                        </form>
                        <h1 className="text-sm mt-4 text-center"> Already have an account? <a href="/login" className="text-primary font-bold"> Log in </a></h1>
                    </Card>
                </div>
            </div>
        </MainLayout >
    )
}

export default SignupPage