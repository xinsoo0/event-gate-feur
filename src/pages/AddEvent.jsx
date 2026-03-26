import React from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/icons/form/Input";
import supabase from "../utils/supabase";
import { useNavigate } from "react-router";
import EventForm from "./EventForm";

const AddEvent = () => {


    return (
        <MainLayout>
            <EventForm />
        </MainLayout>
    );
};

export default AddEvent;