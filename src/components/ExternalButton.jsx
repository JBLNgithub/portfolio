import { FaGithub } from "react-icons/fa";

export default function ExternalButton({ label, ref, isGithub = null }) {
	return (
		<div>
			<a
				className={`external-button ${isGithub && ' github-button'}`}
				href={ref}
				target="_blank"
			>
				{isGithub && <FaGithub className="text-neutral-200 inline mr-1 mb-1" />}
				{label}
			</a>
		</div>
	)
}