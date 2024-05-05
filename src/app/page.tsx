import { Button } from "@/components/ui/button";
import { AlertDialogX } from "@/props/Alert";
import { CommentRatings } from "@/props/Ratings";
import { ToggleGroupX, ToggleGroupY } from "@/props/ToggleX";
import Image from "next/image";

export default function Home() {
	return (
		<main
			className="
			h-full
			bg-secondary
			flex
			justify-center
			"
		>
			<div
				className="bg-white
				pl-6
				pt-8
				flex
				flex-col
				gap-8
				w-full
				max-w-screen-lg"
			>
				<div>
					<h3
						className="
						text-3xl
						sm:text-4xl
						font-semibold
						tracking-tight"
					>
						Rate Your Experience
					</h3>
					<p
						className="
						font-semibold
						text-sm
						sm:text-base
						text-gray-500"
					>
						Please take a moment to leave a review and rating below.
					</p>
				</div>
				<div>
					<h3
						className="pt-4
						text-xl
						sm:text-2xl
						font-semibold
						tracking-tight"
					>
						Safety
					</h3>
					<p
						className="
						text-gray-500
						text-sm
						sm:text-base"
					>
						Rate how safe you felt from 1 to 5.
					</p>
					<CommentRatings
						rating={4.2}
						totalStars={5}
						size={24}
						variant="default"
					/>
				</div>
				<div>
					<h3
						className="
						text-xl
						sm:text-2xl
						font-semibold
						tracking-tight"
					>
						Communication
					</h3>
					<p
						className="
						text-gray-500
						text-sm
						sm:text-base"
					>
						How satisfied were you with our communication?
					</p>
					<CommentRatings
						rating={4}
						totalStars={5}
						size={24}
						variant="default"
					/>
				</div>
				<div>
					<h3
						className="
						text-xl
						sm:text-2xl
						font-semibold
						tracking-tight"
					>
						Recommend Us
					</h3>
					<p
						className="
						text-gray-500
						text-sm
						sm:text-base"
					>
						Would you recommend our services to others?
					</p>
					<div className=" flex">
						<ToggleGroupX />
					</div>
				</div>
				<div>
					<h3
						className="
						text-2xl
						font-semibold
						tracking-tight"
					>
						UI Experience
					</h3>
					<p
						className="
						text-gray-500
						text-sm
						sm:text-base"
					>
						Rate your satisfaction with our UI
					</p>
					<div className=" flex">
						<ToggleGroupY />
					</div>
				</div>
				<div
					className=" flex
					justify-center
					pt-5"
				>
					<AlertDialogX />
				</div>
			</div>
		</main>
	);
}
