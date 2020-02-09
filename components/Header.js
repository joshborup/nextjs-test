import Link from "next/link";

export default function header() {
	return (
		<div>
			<div>
				<h1>The Header</h1>
				<nav>
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/about">
						<a>About</a>
					</Link>
				</nav>
			</div>
		</div>
	);
}
