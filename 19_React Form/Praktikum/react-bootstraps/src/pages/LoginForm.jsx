import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

export default function LoginForm() {
    const { register, formState: { errors }, handleSubmit } = useForm({
        criteriaMode: "all"
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email", {
                        required: "Email tidak boleh kosong!!",
                        pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "format email salah!!"
                        },
                    })}
                />
                {errors.email && <p className='text-danger my-1'>{errors.email.message}</p>}
            </Form.Group>
            <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                        required: "password tidak boleh kosong.",
                        minLength: {
                            value: 8,
                            message: "password minimal harus memiliki 8 karakter"
                        }
                    })}
                />
                {errors.password && <p className='text-danger my-1'>{errors.password.message}</p>}
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
