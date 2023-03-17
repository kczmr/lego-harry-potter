export type NavigationStackParamList = {
  ChooseMinifigScreen: undefined;
  WebViewScreen: { url: string };
  OrderMinifigScreen: { minifigId: string };
  OrderMinifigSummary: {
    minifigId: string;
    minifigTitle: string;
    minifigImage: string;
    // ^ better to use context and set there picked minifig, then use it in summary screen

    fullName: string;
    email: string;
    adress: string;
    city: string;
    state: string;
    zipCode: string;
  };
};
