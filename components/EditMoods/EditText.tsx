import { useEffect, useRef, useState } from "react";
import { FiCheck, FiTrash2 } from "react-icons/fi";
import useStore from "../../store/moodsState";

function EditText({ classes }: { classes?: string }) {
	const [text, setText] = useState("");
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const selectedDate = useStore((state) => state.selectedDate);
	const dates = useStore((state) => state.dates);
	const updateMood = useStore((state) => state.updateMood);
	const deleteDate = useStore((state) => state.deleteDate);

	useEffect(() => {
		if (selectedDate) {
			setText(dates[selectedDate]?.text || "");
		}
	}, [selectedDate]);

	const updateTextArea = () => {
		if (textAreaRef.current != null) {
			const updatedText = textAreaRef.current.value;
			setText(updatedText);
		}
	};

	const handleAddClick = () => {
		if (selectedDate) {
			updateMood(selectedDate, { text });
		}
	};

	const handleDeleteClick = () => {
		if (selectedDate) {
			deleteDate(selectedDate);
			setText("");
		}
	};

	return (
		<div className={`${classes || ""}`}>
			<div className="flex flex-col ">
				<div className="h-1 w-auto bg-yellow-600"></div>
				<textarea
					className="my-1 p-1 h-[13em] text-black max-w-auto"
					placeholder="How are you?"
					ref={textAreaRef}
					name="journal"
					onChange={updateTextArea}
					value={text}
				></textarea>
				<div className=" h-1 w-auto bg-yellow-600"></div>
			</div>
			<div className="flex justify-end">
				{dates[selectedDate] && (
					<button
						onClick={handleDeleteClick}
						className="flex items-center inline-block py-2 px-2 my-1 rounded-md font-bold bg-red-200 text-red-600 mx-1 "
					>
						<FiTrash2 className="h-5 w-5" />
					</button>
				)}
				<button
					onClick={() => {
						handleAddClick();
						// setCanEditTextArea(false);
					}}
					className="flex items-center inline-block py-2 px-2 my-1 rounded-md font-bold bg-yellow-200 text-yellow-600 mx-1 "
				>
					<FiCheck className="h-5 w-5" />
				</button>
			</div>
		</div>
	);
}

export default EditText;
