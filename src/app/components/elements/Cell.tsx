import React, { useRef, useState } from 'react';
import '../../../app/globals.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { removeCell, updateCell } from '@/app/redux/documentSlice';

interface CellProps {
    id: string;
    text: string;
    type: string; 
    metadata: string[]
}

export default function Cell(props: CellProps) {
    const dispatch = useDispatch();
    const cells = useSelector((state: RootState) => state.document.cells);
    
    const {id, text, type, metadata } = props;
    const [cellText, setCellText] = useState(text);
    const textRef = useRef<HTMLDivElement>(null);
    const handleKeyPress = 
    (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === '/') {
            event.preventDefault();
            // setShowTagOptions(true);
        }
        else if(event.ctrlKey && event.altKey ){
            switch (event.key) {
                case 's':
                    handleSave(); 
                    break;
                case 'd':
                    handleRemoveItem(); 
                    break;

                default:
                    break;

            }
        }
    };
 
    const handleSave = () => {
        const newText = textRef.current?.innerText;
        dispatch(updateCell({id: id, content: newText}));
    }
    const handleRemoveItem = () => {
         dispatch(removeCell({id: id}));
    }


    const renderCellContent = () =>{
        if(type == 'h1') return 'text-3xl';
        else if(type == 'h2') return 'text-2xl';
        
        return '';
    }
        return (
            <div className=
            {"m-2 my-1 bg-yellow-500 resize-none overflow-hidden border-none whitespace-pre-wrap " + renderCellContent()}
                contentEditable={true} ref={textRef}
                suppressContentEditableWarning={true}
                onKeyDown={handleKeyPress}
            >
                {cellText}
            {type}
            </div>
        );
     
}

