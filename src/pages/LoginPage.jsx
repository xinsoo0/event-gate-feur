import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Input from '../components/icons/form/Input'
import Card from '../components/icons/Card'
import SignUpButton from '../components/icons/SignUpButton'
import supabase from '../utils/supabase'

const LoginPage = () => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const loginForm = {
            email: formData.get("email"),
            password: formData.get("password")
        }
        // console.log("signupForm", signupForm)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginForm.email,
            password: loginForm.password,
        })

        if (error) alert(error)
        if (data) console.log(data)
    }
    return (
        <MainLayout>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96">
                    <Card>
                        <h1 className="text-2xl font-bold mb-4 text-center"> Log in</h1>
                        <form onSubmit={handleSubmit}>
                            <Input
                                name="email"
                                placeholder="Enter Your Email"
                                label="Email"
                                type="text"
                            />
                            <Input
                                name="password"
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
                    </Card>
                </div>
            </div>
        </MainLayout >
    )
}

export default LoginPage