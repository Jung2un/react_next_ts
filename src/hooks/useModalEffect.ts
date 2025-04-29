'use client';

import { useEffect } from 'react';
import Modal from 'react-modal';

export default function useModalEffect(isOpen: boolean) {
    useEffect(() => {
        // 스크롤 잠금
        const html = document.documentElement;
        if (isOpen) html.classList.add('scroll-lock');
        else html.classList.remove('scroll-lock');

        return () => {
            html.classList.remove('scroll-lock');
        };
    }, [isOpen]);

    useEffect(() => {
        // 모달 초기 설정
        if (typeof window !== 'undefined') {
            const appElement = document.getElementById('__next');
            if (appElement) {
                Modal.setAppElement(appElement);
            }
        }
    }, []);
}
