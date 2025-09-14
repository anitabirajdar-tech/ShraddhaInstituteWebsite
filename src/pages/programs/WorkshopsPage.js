import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaUsers, FaLightbulb, FaCertificate } from "react-icons/fa";

const workshops = [
	{
		title: "Abacus Speed Math Workshop",
		icon: <FaChalkboardTeacher size={36} className="text-orange" />,
		desc: "Boost calculation speed and confidence in just 2 days. Ideal for students ages 7-14.",
		details: [
			"Hands-on abacus activities",
			"Mental math tricks",
			"Participation certificate",
		],
	},
	{
		title: "Vedic Math Crash Course",
		icon: <FaLightbulb size={36} className="text-orange" />,
		desc: "Discover ancient Indian math techniques for faster problem solving. For ages 10+.",
		details: [
			"Multiplication & division shortcuts",
			"Exam time-saving strategies",
			"Interactive practice",
		],
	},
	{
		title: "Teacher Skill Enhancement",
		icon: <FaUsers size={36} className="text-orange" />,
		desc: "Short-term workshops for educators: classroom engagement, new math methods, and more.",
		details: [
			"Latest teaching methodologies",
			"Peer networking",
			"Workshop completion certificate",
		],
	},
];

const WorkshopsPage = () => (
	<>
		<Helmet>
			<title>Workshops | Shraddha Institute</title>
			<meta
				name="description"
				content="Short-term Abacus, Vedic Math, and Teacher Training workshops by Shraddha Institute. Boost skills, speed, and confidence."
			/>
			<link
				rel="canonical"
				href="https://shraddhainstitute.com/programs/workshops"
			/>
		</Helmet>

		{/* --- Hero Section --- */}
		<section
			className="hero-section position-relative overflow-hidden"
			style={{
				background:
					"linear-gradient(135deg, #ea580c 0%, #f97316 50%, #dc2626 100%)",
				color: "white",
				minHeight: "60vh",
				padding: "80px 0",
			}}
		>
			<div
				className="hero-overlay"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: "rgba(0,0,0,0.15)",
					zIndex: 1,
				}}
			></div>
			<Container className="position-relative" style={{ zIndex: 2 }}>
				<Row className="align-items-center justify-content-center min-vh-50 text-center">
					<Col lg={8} xl={7} className="mx-auto">
						<div className="mb-4">
							<span
								className="hero-badge"
								style={{
									background: "rgba(255,255,255,0.15)",
									color: "#fff",
									padding: "12px 24px",
									borderRadius: "50px",
									fontWeight: 600,
									fontSize: "1rem",
									border: "1px solid rgba(255,255,255,0.2)",
									boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
								}}
							>
								Special Workshops
							</span>
						</div>
						<h1
							className="hero-title mb-4"
							style={{
								fontSize: "2.5rem",
								fontWeight: 700,
								color: "#fff",
								textShadow: "0 3px 6px rgba(0,0,0,0.3)",
							}}
						>
							Short-Term Skill Workshops
						</h1>
						<p
							className="hero-subtitle lead mb-4"
							style={{
								color: "rgba(255,255,255,0.95)",
								fontSize: "1.2rem",
								maxWidth: 700,
								margin: "0 auto",
							}}
						>
							Boost your math skills or teaching expertise with our focused,
							high-impact workshops for students and educators.
						</p>
						<Button
							as={Link}
							to="/contact"
							variant="light"
							className="fw-bold text-orange px-4 py-2 mt-2"
							style={{ fontSize: "1.1rem" }}
						>
							Request a Workshop
						</Button>
					</Col>
				</Row>
			</Container>
		</section>
		{/* --- End Hero Section --- */}

		<section className="py-5 bg-light">
			<Container>
				<div className="text-center mb-5">
					<span className="badge bg-orange-soft text-orange rounded-pill px-3 py-2 mb-3">
						Special Programs
					</span>
					<h1 className="display-5 fw-bold mb-3">
						<span className="workshops-orange">Workshops</span>
					</h1>
					<p className="lead text-muted mx-auto" style={{ maxWidth: 700 }}>
						Short-term, high-impact learning experiences for students and
						teachers.
					</p>
				</div>
				<Row className="g-4 justify-content-center">
					{workshops.map((w, idx) => (
						<Col md={6} lg={4} key={idx}>
							<Card className="h-100 border-0 shadow-sm transition-all">
								<Card.Body className="p-4 d-flex flex-column align-items-center text-center">
									<div className="mb-3">{w.icon}</div>
									<h3 className="h5 fw-bold mb-2">{w.title}</h3>
									<p className="text-muted mb-3">{w.desc}</p>
									<ul className="list-unstyled mb-4">
										{w.details.map((d, i) => (
											<li key={i} className="mb-1">
												<FaCertificate className="text-orange me-2" />
												{d}
											</li>
										))}
									</ul>
									<Button
										as={Link}
										to="/contact"
										variant="orange"
										className="rounded-pill px-4 fw-semibold mt-auto"
									>
										Request Workshop
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	</>
);

export default WorkshopsPage;
// No changes needed here for header connection.
// The <Link to="/programs/workshops" ... /> in Header.js will route to this component.
