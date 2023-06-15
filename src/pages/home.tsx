import React, { useCallback, useEffect, useRef, useState } from 'react'
import "../app/globals.css"
import { Main, Spacer } from '../app/components/layouts'
import { Cell, SearchButton } from '../app/components/elements'
import Image from 'next/image'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '@/app/redux/store'
import { addCell } from '@/app/redux/documentSlice'

function generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

export default function home() {
    return (
        <Main>
            <Provider store={store}>
                <div className='flex flex-row 
                justify-between bg-green-400 
                h-16 p-4'>
                    <div className='items-center' >Name and symbol</div>
                    <div className='flex flex-row items-center' >
                        <a href='/settings'
                            className='h-4 items-center flex flex-row'>
                            <div> Settings </div>
                            <Spacer width='h-2' />
                            <Image src={'/search.svg'} alt='setting logo'
                                width={32} height={16} />
                        </a>
                        <Spacer width='w-4' />
                        <SearchButton />
                    </div>

                </div>
                <Body />
            </Provider>
        </Main>
    )
}

function Body() {
    const dispatch = useDispatch();
    const cells = useSelector((state: RootState) => state.document.cells);
    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (event.ctrlKey && event.altKey) {
            switch (event.key) {
                case 'n':
                    handleAddItem();
                    break;
                case 'd':
                    // handleRemoveItem();
                    break;
                case '/':
                    // showItems()
                    break;
                default:
                    break;
            }
        }
    }, []);

    const handleAddItem = () => {
        const id = generateRandomString(10);
        dispatch(addCell({ id: id, content: 'new cell' }))
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [handleKeyPress]);

    return (
        <div className='flex flex-row 
            items-stretch flex-grow bg-red-600'>
            <div className='bg-blue-600 w-96 
                max-h-screen flex flex-col'>
                <div>Note 1</div>
                <div>Note 2</div>
            </div>
            <div className='flex-grow'>
                <div className='flex flex-col items-stretch'>
                    {cells.map((e, index) => {
                        return <div
                            key={index}
                            onMouseEnter={(event: React.MouseEvent) => {

                            }}
                            onMouseLeave={(_) => {
                                // setCellIndex(cells.length); console.log("at index" + cellIndex);
                            }}>
                            <Cell text={e.content} type={'h2'} metadata={[]} id={e.id} />
                        </div>
                    })}
                </div>
            </div>
        </div>

    );
}

