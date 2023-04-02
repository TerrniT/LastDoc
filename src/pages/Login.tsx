import { ArrowRight } from "lucide-react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/atoms/button";
import Logo from "../components/atoms/logo";
import RoleSwitch from "../components/atoms/RoleSwitch";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const INITIAL_STATE = {
	email: "",
	password: "",
};

const Login = () => {
	const [passwordShown, setPasswordShown] = useState<boolean>(false);
	const { login } = useAuth();

	const navigate = useNavigate();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const togglePasswordVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	const handleChange = (event: any) => {
		setForm({
			...form,
			[event.target.id]: event.target.value,
		});
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		login(form);
		setForm(INITIAL_STATE);
		navigate("/admin");
	};

	return (
		<div className="h-screen bg-[url('/public/pattern.svg')]  flex items-center">
			<div className='flex flex-col items-center justify-center mx-auto w-[640px]  bg-gray-500 rounded-3xl '>
				<div className='w-[520px] h-[740px]'>
					<div className='flex  flex-col items-center mt-6'>
						<Logo className='w-12 h-12 mb-4' />
						<h1 className='font-bold text-2xl'>Welcome to LastDoc!</h1>
					</div>
					<form onSubmit={handleSubmit}>
						<div className='w-full flex flex-col'>
							<label htmlFor='email'>Email</label>
							<div className='border border-gray-400 rounded-lg flex items-center justify-between'>
								<input
									value={form.email}
									id='email'
									name='email'
									onChange={handleChange}
									type='email'
									placeholder='john@email.com'
									className='w-full p-3 ring-0 bg-slate-50 focus:ring-0 rounded-lg'
								/>
							</div>
						</div>
						<div className='w-full flex flex-col mt-10'>
							<label htmlFor='password'>Password</label>
							<div className='border border-gray-400 p-3 rounded-lg flex items-center justify-between'>
								<input
									id='password'
									value={form.password}
									name='password'
									onChange={handleChange}
									type={passwordShown ? "text" : "password"}
									placeholder='Type password'
									className='w-full ring-0 focus:ring-0'
								/>
								{passwordShown ? (
									<BsEyeSlash onClick={togglePasswordVisibility} />
								) : (
									<BsEye onClick={togglePasswordVisibility} />
								)}
							</div>
						</div>

						<RoleSwitch />

						<Button
							type='submit'
							onClick={handleSubmit}
							variant={"default"}
							size='default'
							className='flex gap-2 w-full'
						>
							<p>Sign In</p>
							<ArrowRight />
						</Button>

						<p className='text-black font-normal '>
              Forgot your password?{"  "}
							<Link to='/help' className='text-blue-600 underline font-light'>
                Reset Password
							</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
