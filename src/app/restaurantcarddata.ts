export interface Restaurantcarddata {
    offer: string;
    name: string;
    location: string;
    imageUrl: string;
    deliveryFee: {
        amount: number;
        currency: string;
    };
    rating: {
        value: number;
        reviewsCount: number;
    };
    deliveryTimeMinutes: number;
}

