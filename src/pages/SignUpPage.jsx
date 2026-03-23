import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Input from '../components/icons/form/Input'
import Card from '../components/icons/Card'

const SignupPage = () => {
    return (
        <MainLayout>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96">
                    <Card>
                        <h1 className="text-2xl font-bold mb-4 text-center"> Sign-up Form</h1>
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
                            className="btn btn-primary rounded-full mt-5">
                            Submit
                        </button>
                    </Card>
                </div>
            </div>
        </MainLayout >
    )
}

export default SignupPage