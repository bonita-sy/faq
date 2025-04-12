'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import FAQList from './FAQList';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: string;
}

enum CATEGORY {
  CONSULT = 0,
  USAGE
};

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className='infoContainer'
      role="tabpanel"
      hidden={CATEGORY[value] !== index}
      {...other}
    >
      {CATEGORY[value] === index && <Box>{children}</Box>}
    </div>
  );
}

let currentPageInfos = {
  "totalRecord": 0,
  "offset": 0,
  "limit": 10,
  "prevOffset": 0,
  "nextOffset": 0
};
let currentSubTab = "ALL";
let clickedSearchButton: boolean = false;

export default function FAQContainer() {
  const [tabValue, setTabValue] = useState("CONSULT");
  const [inputValue, setInputValue] = useState('');
  const [categoryData, setCategoryData] = useState<any>([]);
  const [faqData, setFaqData] = useState<any>({
    pageInfo: {},
    items: []
  });

  const handleTabValueChange = (evt: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const handleInputValueChange = (evt: any) => {
    setInputValue(evt.target.value);
  };
  const handleSubTabChange = (subTab: string) => {
    const reqQuery: any = {
      limit: '10',
      offset: '0',
      tab: tabValue
    };
    if (subTab !== "ALL") {
      reqQuery.faqCategoryID = subTab;
    }
    currentSubTab = subTab;

    const dataParams = new URLSearchParams(reqQuery);
    fetch(`/api/faq?${dataParams.toString()}`)
      .then(res => res.json())
      .then(setFaqData);
  };
  const clickClear = () => {
    setInputValue('');
  };
  const searchKeyword = () => {
    clickedSearchButton = true;
    const reqQuery: any = {
      limit: '10',
      offset: 0,
      tab: tabValue,
    };
    if (currentSubTab !== "ALL") {
      reqQuery.faqCategoryID = currentSubTab;
    }
    if (inputValue) {
      reqQuery.question = inputValue;
    }

    const dataParams = new URLSearchParams(reqQuery);
    fetch(`/api/faq?${dataParams.toString()}`)
      .then(res => res.json())
      .then(setFaqData);
  };
  const resetSearch = () => {
    setInputValue('');

    const dataParams = new URLSearchParams({
      limit: '10',
      offset: '0',
      tab: tabValue
    });
    fetch(`/api/faq?${dataParams.toString()}`)
      .then(res => res.json())
      .then(setFaqData);
  };
  const clickMoreButton = () => {
    const reqQuery: any = {
      limit: '10',
      offset: currentPageInfos.offset + 10,
      tab: tabValue
    };
    if (currentSubTab !== "ALL") {
      reqQuery.faqCategoryID = currentSubTab;
    }

    const dataParams = new URLSearchParams(reqQuery);
    fetch(`/api/faq?${dataParams.toString()}`)
      .then(res => res.json())
      .then((resData) => {
        const newItems = [...faqData.items, ...resData.items];
        resData.items = newItems;
        setFaqData(resData);
      });
  };
  useEffect(() => {
    const categoryParams = new URLSearchParams({
      tab: tabValue
    });
    fetch(`/api/faq/category?${categoryParams.toString()}`)
      .then(res => res.json())
      .then(setCategoryData);

    const dataParams = new URLSearchParams({
      limit: '10',
      offset: '0',
      tab: tabValue
    });
    fetch(`/api/faq?${dataParams.toString()}`)
      .then(res => res.json())
      .then(setFaqData);
  }, [tabValue]);
  useEffect(() => {
    currentPageInfos = faqData.pageInfo;
    clickedSearchButton = false;
  }, [faqData]);

  return (
    <Box>
      <Tabs
        variant="fullWidth"
        value={tabValue}
        onChange={handleTabValueChange}
        sx={{
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
      >
        <Tab label="서비스 도입" value={"CONSULT"} disableRipple />
        <Tab label="서비스 이용" value={"USAGE"} disableRipple />
      </Tabs>

      <div className="search">
        <div className="input-wrap">
          <input
            type="text"
            placeholder="찾으시는 내용을 입력해 주세요"
            value={inputValue}
            onChange={handleInputValueChange}
          />
          {inputValue && (
            <button className="clear" onClick={clickClear}>
              <Image
                src="/ic_clear.svg"
                alt="다시 입력"
                width={24}
                height={24}
                style={{ cursor: "pointer" }}
                priority
              />
            </button>
          )}
          <button type="submit" className="submit" onClick={searchKeyword}>
            <Image
              src="/ic_search.svg"
              alt="검색"
              width={32}
              height={32}
              style={{ cursor: "pointer" }}
              priority
            />
          </button>
        </div>
      </div>

      {(inputValue && clickedSearchButton) && <div className="search-info">
        <h2 className="heading-info">
          검색결과 총 <em>{faqData.items.length}</em>건
        </h2>
        <button type="button" className="init" onClick={resetSearch}>검색초기화</button>
      </div>}

      <CustomTabPanel value={tabValue} index={0}>
        <FAQList category={categoryData} data={faqData} tab={tabValue} onChange={handleSubTabChange} onClickMore={clickMoreButton} />
      </CustomTabPanel>
      <CustomTabPanel value={tabValue} index={1}>
        <FAQList category={categoryData} data={faqData} tab={tabValue} onChange={handleSubTabChange} onClickMore={clickMoreButton} />
      </CustomTabPanel>
    </Box>
  );
}
