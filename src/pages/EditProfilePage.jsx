import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Input from '../components/icons/form/Input'
import Card from '../components/icons/Card'
import SignUpButton from '../components/icons/SignUpButton'
import supabase from '../utils/supabase'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { SessionContext } from '../contexts/SessionContext'

const EditProfilePage = () => {
    const { session, profile, setProfile } = useContext(SessionContext)
    const navigate = useNavigate()

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
        const { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .update({
                firstname: signupForm.firstname,
                lastname: signupForm.lastname,
                email: signupForm.email,
            })

            .eq("id", session.user.id)
            .select()
            .single()

        if (profileError) alert(profileError)
        if (profileData) {
            navigate("/profile")
            setProfile(profileData)
        }
    }


    return (
        <MainLayout>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96">
                    <Card>
                        <h1 className="text-2xl font-bold mb-4 text-center"> Edit Your Profile </h1>
                        <form onSubmit={handleSubmit}>
                            <Input
                                name="firstname"
                                placeholder="Enter Your First Name"
                                label="Firstname"
                                type="text"
                                defaultValue={profile?.firstname}
                            />
                            <Input
                                name="lastname"
                                placeholder="Enter Your Last Name"
                                label="Lastname"
                                type="text"
                                defaultValue={profile?.lastname}
                            />
                            <Input
                                name="email"
                                placeholder="Enter Your Email"
                                label="Email"
                                type="text"
                                defaultValue={profile?.email}
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

export default EditProfilePage