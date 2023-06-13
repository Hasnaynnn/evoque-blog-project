import axios from "axios"
import { motion } from "framer-motion"
import { useState } from "react"
import styles from "../styles/login.module.css"

const LoginCard = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")

	const onSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		const user = {
			gmail: userName,
			password
		}
		try {
			await axios.post("/api/login", user)
			window.location.replace("/admin")
			setLoading(false)
			setError(false)
		} catch (err) {
			setLoading(false)
			setError(true)
		}
	}
	return (
		<motion.div initial={{ opacity: 0, scale: 0 }}
			animate={{
				opacity: 1,
				scale: 1,
				type: "keyframes",
				transition: {
					duration: 1,
					bounce: 1,
					delay: 0.1,
				},
			}}
			className={styles.login_form_bd}>
			<div className={styles.form_wrapper}>
				<div className={styles.form_container}>
					<h1> Please Login</h1>
					{!loading && error && <p className={styles.error_message}>Please enter valid credientials</p>}
					<form onSubmit={onSubmit}>
						<div className={styles.form_control}>
							<input type="text" placeholder="username" required onChange={(e) => setUserName(e.target.value)} />
						</div>
						<div className={styles.form_control}>
							<input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
						</div>
						<button className={styles.login_btn}>{loading ? "Loading" : "Login"}</button>
						<p className={styles.text}>Do not have an account? <a href="register.html"> Register</a></p>
					</form>
				</div>
			</div>
		</motion.div>
	)
}

export default LoginCard

/*

<main class="main">
	<div class="container">
		<section class="wrapper">
			<div class="heading">
				<h1 class="text text-large">Sign In</h1>
				<p class="text text-normal">New user? <span><a href="#" class="text text-links">Create an account</a></span>
				</p>
			</div>
			<form name="signin" class="form">
				<div class="input-control">
					<label for="email" class="input-label" hidden>Email Address</label>
					<input type="email" name="email" id="email" class="input-field" placeholder="Email Address">
				</div>
				<div class="input-control">
					<label for="password" class="input-label" hidden>Password</label>
					<input type="password" name="password" id="password" class="input-field" placeholder="Password">
				</div>
				<div class="input-control">
					<a href="#" class="text text-links">Forgot Password</a>
					<input type="submit" name="submit" class="input-submit" value="Sign In" disabled>
				</div>
			</form>
		</section>
	</div>
</main>

*/
