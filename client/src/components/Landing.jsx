import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import Typewriter from './Typewriter';
import { skillItems } from './skills.js';

const Landing = () => {
	const introductionHeaderRef = useRef(null);
	const introductionParaRef = useRef(null);
	const skillsHeaderRef = useRef(null);
	const skillsParaRef = useRef(null);

	const introductionHeaderInView = useInView(introductionHeaderRef, { once: false });
	const introductionParaInView = useInView(introductionParaRef, { once: false });
	const skillsHeaderInView = useInView(skillsHeaderRef, { once: false });
	const skillsParaInView = useInView(skillsParaRef, { once: false });

	return (
		<div className="landing-container">
			<div className="landing-section">
				<h1>Hi There!</h1>
				<h2>I'm <span className="myGradientText">Abhishek Verma</span></h2>
				<span>An aspiring Software Developer</span>

				<Typewriter />

				<div className="icons-landing">
					<ul>
						<motion.li
							initial={{ opacity: 0, x: -50, rotate: -90 }}
							animate={{ opacity: 1, x: 0, rotate: 0 }}
							transition={{ duration: 2 }}
						>
							<a href="https://www.linkedin.com/in/abhishek-verma-05177625b">
								<img src='./images/linkedin.svg' alt='Linkedin Logo'></img>
							</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, rotate: 360 }}
							animate={{ opacity: 1, rotate: 0 }}
							transition={{ duration: 3 }}
						>
							<a href="https://github.com/AbhishekX2004">
								<img src='./images/github.svg' alt='Github Logo'></img>
							</a>
						</motion.li>
						<motion.li
							initial={{ opacity: 0, x: 50, rotate: 90 }}
							animate={{ opacity: 1, x: 0, rotate: 0 }}
							transition={{ duration: 2 }}
						>
							<a href="https://x.com/Abhishek_X_2004">
								<img src='./images/x.svg' alt='X Logo (previously Twitter)'></img>
							</a>
						</motion.li>
					</ul>
				</div>
			</div>

			<div id='aboutMe' className='introduction-section'>
				<motion.h4
					ref={introductionHeaderRef}
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: introductionHeaderInView ? 1 : 0, x: introductionHeaderInView ? 0 : -40 }}
					transition={{ duration: 1 }}
				>
					About Me
				</motion.h4>
				<motion.p
					ref={introductionParaRef}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: introductionParaInView ? 1 : 0, y: introductionParaInView ? 0 : 50 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					I’m Abhishek Verma, currently I live in Indore India, pursuing BTech in IT from Shri G. S. Institute of Technology and Science.
					I’ve been leveling up my tech skills and problem solving. Transitioning to web development, I’ve delved into various libraries and frameworks such as React.js, Javascript, Framer Motion, and Redux. I also explored Firebase as a cloud platform.
					In my free time, I enjoy watching anime, and experimenting with new technologies. I’m always eager to learn about new projects, so please feel free to
					<Link to={`/contactMe`} style={{ color: "cyan", textDecoration: 'none' }}> reach out to me</Link>.
				</motion.p>
			</div>

			<div id='skills' className='skills-section'>
				<motion.h4
					ref={skillsHeaderRef}
					initial={{ opacity: 0, x: -40 }}
					animate={{ opacity: skillsHeaderInView ? 1 : 0, x: skillsHeaderInView ? 0 : -40 }}
					transition={{ duration: 1, delay: 0.5 }}
				>
					Some of the technologies I have worked on:
				</motion.h4>
				<motion.p
					ref={skillsParaRef}
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: skillsParaInView ? 1 : 0, y: skillsParaInView ? 0 : 50 }}
					transition={{ duration: 1, delay: 1 }}
				>
					<div className="skills-section">
						<ul className="skills-list">
							{skillItems.map((item, index) => (
								<motion.li
									key={index}
									className="skill-item"
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: skillsParaInView ? 1 : 0, y: skillsParaInView ? 0 : 50 }}
									transition={{ duration: 1, delay: 0.3*index }}
								>
									<img src={item.src} alt={item.alt} /><span>{item.text}</span>
								</motion.li>
							))}
						</ul>
					</div>
				</motion.p>
			</div>
		</div>
	);
};

export default Landing;
