import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Input from '../components/icons/form/Input'
import Card from '../components/icons/Card'
import SignUpButton from '../components/icons/SignUpButton'
import supabase from '../utils/supabase'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { SessionContext } from '../contexts/SessionContext'

const SignupPage = () => {
    const session = useContext(SessionContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (session) {
            navigate("/")
        }
    }, [session, navigate])


    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const signupForm = {
            firstname: formData.get("firstname"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            password: formData.get("password")
        }
        // console.log("signupForm", signupForm)
        const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email: signupForm.email,
            password: signupForm.password,
        })
        if (signUpError) alert(signUpError)
        console.log("signUpData", signUpData)
        if (signUpData) {
            console.log("signUpData", signUpData)
            const { data: profileData, error: profileError } = await supabase
                .from("profiles")
                .insert({
                    id: signUpData.user.id,
                    firstname: signupForm.firstname,
                    lastname: signupForm.lastname,
                    email: signupForm.email,
                })
            if (profileError) alert(profileError)
            if (profileData) console.log(" profileData", profileData)
        }
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
                        <h1 className="text-sm mt-4 text-center"> Already have an account? <a href="/login" className="text-primary font-bold"> Log in </a></h1>
                    </Card>
                </div>
            </div>
        </MainLayout >
    )
}

export default SignupPage