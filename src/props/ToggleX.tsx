import {
	FontBoldIcon,
	FontItalicIcon,
	UnderlineIcon,
} from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ToggleGroupX() {
	return (
		<ToggleGroup type="single">
			<ToggleGroupItem value="yes" aria-label="Toggle bold">
				<img src="/thumbs-up.svg" alt="" className=" h-8 w-8" />
				<span className=" pl-2">Yes</span>
			</ToggleGroupItem>
			<ToggleGroupItem value="no" aria-label="Toggle italic">
				<img src="/thumbs-down.svg" alt="" className=" h-8 w-8" />
				<span className=" pl-2">No</span>
			</ToggleGroupItem>
		</ToggleGroup>
	);
}

export function ToggleGroupY() {
	return (
		<ToggleGroup type="single">
			<ToggleGroupItem value="excellent" aria-label="Toggle bold">
				<span className=" pl-2">Excellent</span>
			</ToggleGroupItem>
			<ToggleGroupItem value="good" aria-label="Toggle italic">
				<span className=" pl-2">Good</span>
			</ToggleGroupItem>
			<ToggleGroupItem value="fair" aria-label="Toggle italic">
				<span className=" pl-2">Fair</span>
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
