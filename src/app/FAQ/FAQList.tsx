'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

type CategoryInfo = {
    categoryID: string,
    name: string
};

type PAGE_INFO = {
    "totalRecord": number,
    "offset": number,
    "limit": number,
    "prevOffset": number,
    "nextOffset": number
};

type DATA_ITEM = {
    "id": number,
    "categoryName": string,
    "subCategoryName": string,
    "question": string,
    "answer": string
};

type DataInfo = {
    pageInfo: PAGE_INFO,
    items: DATA_ITEM[]
};

type ConsultProps = {
    category: CategoryInfo[];
    data: DataInfo;
    tab: "CONSULT" | "USAGE";
    onChange: (subTab: string) => void;
    onClickMore: () => void;
};

export default function FAQList({
    category,
    data,
    tab,
    onChange,
    onClickMore
}: ConsultProps) {
    const [selectedSubTab, setSubTabValue] = useState("ALL");
    const handleCategoryValueChange = (_event: React.SyntheticEvent, newValue: string) => {
        setSubTabValue(newValue);
        onChange(newValue);
    };

    return (
        <Box className="filter">
            <Tabs
                value={selectedSubTab}
                onChange={handleCategoryValueChange}
                sx={{
                    '& .MuiTabs-indicator': {
                        display: 'none',
                    },
                }}
            >
                <Tab className="label" key={"ALL"} label={"전체"} value={"ALL"} disableRipple />
                {category.map((info) => (
                    <Tab className="label" key={info.categoryID} label={info.name} value={info.categoryID} disableRipple />
                ))}
            </Tabs>
            {data.items.length === 0 && <div className="no-data"><p>검색결과가 없습니다.</p></div>}

            {data.items.length !== 0 && <div>
                <div className='faq-list'>
                    {data.items.map((elem) => (
                        <Accordion key={elem.id} className="faq-list-item" sx={{ boxShadow: 'none' }}>
                            <AccordionSummary>
                                {tab === "USAGE" && <Typography className='category-name'>{elem.categoryName}</Typography>}
                                <Typography className='category-name'>{elem.subCategoryName}</Typography>
                                <Typography className='question'>{elem.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails dangerouslySetInnerHTML={{ __html: elem.answer }} />
                        </Accordion>
                    ))}
                </div>
                {(data.pageInfo.nextOffset !== 0 && (data.pageInfo.totalRecord > (data.pageInfo.nextOffset + 10))) && <button type="button" className="list-more" onClick={onClickMore}><i></i>더보기</button>}
            </div>}

        </Box >
    );
}
