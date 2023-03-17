export type NavigationStackParamList = {
  ChooseMinifigScreen: undefined;
  WebViewScreen: { url: string };
  OrderMinifigScreen: { minifigId: string };
  OrderMinifigSummary: {
    minifigId: string;
    fullName: string;
    email: string;
    adress: string;
    city: string;
    state: string;
    zipCode: string;
  };
};
