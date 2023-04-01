import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";

export default function RegisterForm() {

    const { register, formState: { errors }, handleSubmit, watch } = useForm({
        criteriaMode: "all"
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col className='col-3'>
                    <Form.Group className="mb-3" controlId="formBasiText">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter First Name"
                            {...register("firstName", {
                                required: "First name tidak boleh kosong!!",
                                minLength: {
                                    value: 3,
                                    message: "First Name minimal harus memiliki 3 karakter"
                                },
                            })}
                        />
                        {errors.firstName && <p className='text-danger my-1'>{errors.firstName.message}</p>}
                    </Form.Group>
                </Col>
                <Col className='col-3'>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Password"
                            {...register("lastName", {
                                required: "Last name tidak boleh kosong!!",
                                minLength: {
                                    value: 3,
                                    message: "Last Name minimal harus memiliki 3 karakter"
                                },
                            })}
                        />
                        {errors.lastName && <p className='text-danger my-1'>{errors.lastName.message}</p>}
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
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

            <Row>
                <Col className='col-3'>
                    <Form.Group className="mb-3 " controlId="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            {...register("password", {
                                required: "Password tidak boleh kosong!!",
                            })}
                        />
                        {errors.password && <p className='text-danger my-1'>{errors.password.message}</p>}
                    </Form.Group>
                </Col>
                <Col className='col-3'>
                    <Form.Group className="mb-3" controlId="cPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            {...register("confirmPassword", {
                                required: "Confirm Password tidak boleh kosong!!",
                                validate: (val) => {
                                    if (watch('password') != val) {
                                        return " Confirm password tidak sesuai!!";
                                    }
                                }
                            })}
                        />
                        {errors.confirmPassword && <p className='text-danger my-1'>{errors.confirmPassword.message}</p>}
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}
