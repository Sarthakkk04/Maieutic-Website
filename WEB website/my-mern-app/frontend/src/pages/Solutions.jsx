import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './solutions.css';

import ElearningImg from "../img-assets/contactpage.png";
import AnimationImg from "../img-assets/image 2111.png";
import TrainingImg from "../img-assets/Rectangle 184.png";
import PsychometricImg from "../img-assets/Rectangle 185.png";

const services = [
	{
		id: 'elearning',
		title: 'eLearning Services',
		headline: 'Impactful, learner-centric content engineered for performance.',
		bullets: [
			'Custom eLearning modules',
			'Scenario-based learning',
			'Gamified learning paths',
			'Assessments & analytics',
		],
		img: ElearningImg,
	},
	{
		id: 'animation',
		title: 'Animation Services',
		headline: 'Bring concepts to life through visuals and motion.',
		bullets: ['2D animations', '3D motion graphics', 'Explainer videos', 'Storyboarding'],
		img: AnimationImg,
	},
	{
		id: 'training',
		title: 'Training Solutions',
		headline: 'Scalable, practical, outcome-driven training strategies.',
		bullets: [
			'Workforce upskilling programs',
			'Soft-skill & behavioral training',
			'Blended learning',
			'Competency frameworks',
		],
		img: TrainingImg,
	},
	{
		id: 'psychometric',
		title: 'Psychometric Assessment',
		headline: 'Identify strengths. Understand preferences. Unlock potential.',
		bullets: [
			'Aptitude & cognitive tests',
			'Personality profiling',
			'Career assessment',
			'Behavioral indicators',
		],
		img: PsychometricImg,
	},
];

export default function Solutions() {
	const navigate = useNavigate();
	const rootRef = useRef(null);

	useEffect(() => {
		const el = rootRef.current;
		if (!el || typeof IntersectionObserver === 'undefined') return;
		const items = el.querySelectorAll('.reveal');
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) entry.target.classList.add('in-view');
				});
			},
			{ threshold: 0.18 }
		);
		items.forEach((it) => obs.observe(it));
		return () => obs.disconnect();
	}, []);

	function scrollTo(id) {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	return (
		<main className="solutions-page" ref={rootRef}>
			<section className="solutions-hero">
				<div className="hero-bg" aria-hidden />
				<div className="site-container hero-split">
					<div className="hero-left">
						<h1>Transforming Learning Into Measurable Impact</h1>
						<p className="lead">Empowering organizations with next-generation learning, content, and assessment solutions.</p>

						<div className="hero-cta-row">
							<button className="btn-primary" onClick={() => navigate('/book-a-demo')}>Book a Demo</button>
							<button className="btn-outline" onClick={() => scrollTo('elearning')}>Explore Solutions</button>
						</div>

						<div className="hero-icons" role="toolbar" aria-label="quick links">
							<HeroIcon label="eLearning" onClick={() => scrollTo('elearning')}>
								<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="#0ea08f" strokeWidth="1.6"/></svg>
							</HeroIcon>
							<HeroIcon label="Animation" onClick={() => scrollTo('animation')}>
								<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="12" cy="12" r="8" stroke="#f08a5d" strokeWidth="1.6"/></svg>
							</HeroIcon>
							<HeroIcon label="Training" onClick={() => scrollTo('training')}>
								<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="#3b82f6" strokeWidth="1.6"/></svg>
							</HeroIcon>
							<HeroIcon label="Psychometric" onClick={() => scrollTo('psychometric')}>
								<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" stroke="#7c3aed" strokeWidth="1.6"/></svg>
							</HeroIcon>
						</div>
					</div>

					<div className="hero-right">
						<div className="hero-illustration" aria-hidden>
							<svg className="hero-svg" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid meet">
								<defs>
									<linearGradient id="g1" x1="0" x2="1">
										<stop offset="0" stopColor="#e6fffa" />
										<stop offset="1" stopColor="#ecfeff" />
									</linearGradient>
								</defs>
								<g className="books" transform="translate(40,40)">
									<rect className="book book1" x="0" y="80" width="80" height="16" rx="3" fill="#ffd6a5" />
									<rect className="book book2" x="10" y="60" width="80" height="16" rx="3" fill="#caffbf" />
									<rect className="book book3" x="20" y="40" width="80" height="16" rx="3" fill="#9bf6ff" />
								</g>
								<g className="screen" transform="translate(220,40)">
									<rect className="screen-rect" x="0" y="0" width="200" height="120" rx="10" fill="#ffffff" stroke="#d1fae5"/>
									<circle className="screen-dot" cx="160" cy="20" r="6" fill="#7c3aed" />
								</g>
								<g className="spark" transform="translate(460,40)">
									<path className="spark-path" d="M10 60 L30 40 L50 60 L30 80 Z" fill="#ffd6a5" />
								</g>
								<g className="chart" transform="translate(320,180)">
									<rect x="0" y="40" width="20" height="40" fill="#a78bfa" />
									<rect x="30" y="20" width="20" height="60" fill="#60a5fa" />
									<rect x="60" y="0" width="20" height="80" fill="#34d399" />
								</g>
							</svg>
						</div>
					</div>
				</div>
			</section>

			<section id="elearning" className="section section-elearning reveal">
				<div className="site-container section-inner">
					<div className="section-media">
						<div className="media-photo" style={{ backgroundImage: `url(${services[0].img})` }} />
						<div className="media-overlay">
							<div className="ui-card">LMS Dashboard <span className="meter"/></div>
						</div>
					</div>
					<div className="section-content">
						<h2>{services[0].title}</h2>
						<p className="section-headline">{services[0].headline}</p>
						<ul className="bullets">
							{services[0].bullets.map((b) => <li key={b}>{b}</li>)}
						</ul>
						<div className="micro-garnish">
							<div className="module-card">Module A <div className="progress"><span style={{width:'68%'}}/></div></div>
							<div className="badge">Certificate</div>
						</div>
					</div>
				</div>
			</section>

			<section id="animation" className="section section-animation reveal">
				<div className="site-container section-inner split">
					<div className="anim-media">
						<div className="fake-animation">
							<div className="shape s1"/><div className="shape s2"/><div className="shape s3"/>
						</div>
						<div className="carousel-samples">
							<img src={services[1].img} alt="sample frame"/>
							<img src={services[1].img} alt="sample frame"/>
							<img src={services[1].img} alt="sample frame"/>
						</div>
					</div>
					<div className="anim-content">
						<h2>{services[1].title}</h2>
						<p className="section-headline">{services[1].headline}</p>
						<div className="feature-grid">
							{services[1].bullets.map((b) => (
								<div className="feature" key={b}><strong>{b}</strong></div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="training" className="section section-training reveal">
				<div className="site-container section-inner split reverse">
					<div className="training-content">
						<h2>{services[2].title}</h2>
						<p className="section-headline">{services[2].headline}</p>
						<ul className="bullets">
							{services[2].bullets.map((b) => <li key={b}>{b}</li>)}
						</ul>
					</div>
					<div className="training-media">
						<div className="photo-collage" style={{ backgroundImage: `url(${services[2].img})` }} />
						<div className="cards-list">
							<div className="card">Upskilling</div>
							<div className="card">Blended</div>
							<div className="card">Roadmap</div>
						</div>
					</div>
				</div>
			</section>

			<section id="psychometric" className="section section-psychometric reveal">
				<div className="site-container section-inner split">
					<div className="psych-media">
						<div className="glass-card brain-anim" aria-hidden>
							<svg viewBox="0 0 120 120" className="brain-svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#93c5fd" strokeWidth="2"/></svg>
						</div>
						<div className="ui-screenshot" style={{ backgroundImage: `url(${services[3].img})` }} />
					</div>
					<div className="psych-content">
						<h2>{services[3].title}</h2>
						<p className="section-headline">{services[3].headline}</p>
						<ul className="bullets">
							{services[3].bullets.map((b) => <li key={b}>{b}</li>)}
						</ul>
					</div>
				</div>
			</section>

			<section className="solutions-cta">
				<div className="site-container cta-inner">
					<h2>Let’s Build the Future of Learning Together</h2>
					<div>
						<button className="btn-primary" onClick={() => navigate('/book-a-demo')}>Book a Demo</button>
					</div>
				</div>
			</section>

			<footer className="solutions-footer">
				<div className="site-container footer-inner">
					<div>© {new Date().getFullYear()} Maieutic</div>
					<div><a href="/contact-us">Contact</a></div>
				</div>
			</footer>
		</main>
	);
}

function HeroIcon({ children, label, onClick }) {
	return (
		<button className="hero-icon" title={label} onClick={onClick} aria-label={label}>
			{children}
		</button>
	);
}

