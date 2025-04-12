import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const MOCK_DATA = {
    CONSULT: [
        {
            categoryID: 'PRODUCT',
            name: '서비스 상품',
        },
        {
            categoryID: 'COUNSELING',
            name: '도입 상담',
        },
        {
            categoryID: 'CONTRACT',
            name: '계약',
        },
    ],
    USAGE: [
        {
            "categoryID": "SIGN_UP",
            "name": "가입문의"
        },
        {
            "categoryID": "BUSINESS",
            "name": "비즈니스(업무용)"
        },
        {
            "categoryID": "ACCIDENT",
            "name": "사고/보험"
        },
        {
            "categoryID": "RESERVATION",
            "name": "예약/결제"
        },
        {
            "categoryID": "VEHICLE",
            "name": "차량문의"
        },
        {
            "categoryID": "REFUEL",
            "name": "충전"
        },
        {
            "categoryID": "COUPON",
            "name": "쿠폰/기타"
        }
    ]
};

const querySchema = z.object({
    tab: z.enum(['CONSULT', 'USAGE']),
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const verifiedQueryResult = querySchema.safeParse(req.query);
    if (!verifiedQueryResult.success) {
        return res.status(400).json({ error: 'Invalid query', details: verifiedQueryResult.error.flatten() });
    }
    const { tab } = verifiedQueryResult.data;

    res.status(200).json(MOCK_DATA[tab]);
}
