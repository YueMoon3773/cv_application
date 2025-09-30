import { useState } from 'react';

import { PreviewIcon, DownloadIcons, PrinterIcon } from '../../assets/data/svgIcons';

import './sideBtn.scss';

const SideBtn = ({ btnType = '' }) => {
    const handleExport = async () => {
        const element = document.querySelector('.resumeDisplay .resume');

        // Clone element to avoid messing with original
        const clone = element.cloneNode(true);
        clone.style.height = element.scrollHeight + 'px'; // expand full height
        clone.style.overflow = 'visible';
        clone.style.position = 'absolute';
        clone.style.left = '-9999px'; // hide clone
        document.body.appendChild(clone);

        // Capture the clone
        const canvas = await html2canvas(clone, { scale: 2 });
        document.body.removeChild(clone);

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

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

        console.log('done export');

        pdf.save('export.pdf');
    };
    
    return (
        <button className={`sideBtn ${btnType}`}>
            {btnType === 'preview' && <PreviewIcon />}
            {btnType === 'download' && <DownloadIcons />}
            {btnType === 'print' && <PrinterIcon />}
        </button>
    );
};

export default SideBtn;
