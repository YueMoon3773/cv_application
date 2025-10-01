import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { PreviewIcon, DownloadIcons, PrinterIcon } from '../../assets/data/svgIcons';

import './sideBtn.scss';

const SideBtn = ({ btnType = '', setIsShowResume }) => {
    const handleExportPDF = async () => {
        const element = document.querySelector('.resumeDisplay .resume');

        // Clone element to avoid messing with original
        const clone = element.cloneNode(true);
        clone.style.height = element.scrollHeight + 'px'; // expand full height
        clone.style.overflow = 'visible';
        clone.style.position = 'absolute';
        clone.style.left = '-999999px'; // hide clone
        document.body.appendChild(clone);
        console.log(clone);

        // Capture the clone
        console.log('start capture');

        const canvas = await html2canvas(clone, { scale: 2.6 });
        document.body.removeChild(clone);
        console.log('done capture');

        // Turns the canvas drawing into a base64 PNG image
        const imgData = canvas.toDataURL('image/png');
        // Creates a new PDF document using jsPDF.
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        // stretch to fit the PDF width.
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        // Add pages as needed
        while (heightLeft > 0) {
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            position -= pageHeight;
            if (heightLeft > 0) pdf.addPage();
        }

        // console.log('done export');

        pdf.save('resume.pdf');
    };

    return (
        <button
            className={`sideBtn ${btnType}`}
            onClick={() => {
                if (btnType === 'download') {
                    alert('Your resume is being created, please wait a moment...');
                    handleExportPDF();
                } else if (btnType === 'preview') {
                    setIsShowResume((prev) => !prev);
                }
            }}
        >
            {btnType === 'preview' && (
                <>
                    <PreviewIcon />
                    <span className="sideBtnText">Preview</span>
                </>
            )}
            {btnType === 'download' && (
                <>
                    <DownloadIcons />
                    <span className="sideBtnText">Download</span>
                </>
            )}
        </button>
    );
};

export default SideBtn;
