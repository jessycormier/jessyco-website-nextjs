import type { NextApiRequest } from 'next';

export function getContactInformation(req: NextApiRequest) {

    const contactInformation = {
        name: 'Jessy Cormier',
        currentTitle: 'Senior Front-end Developer',
        details: []
    };

    const canDisplayContactDetails = req?.query?.t === 'dacc91f5-ca2d-5075-b2bf-d1415223d9b5';
    if (canDisplayContactDetails) {
        contactInformation.details = [
        ];
    }

    return contactInformation;
}