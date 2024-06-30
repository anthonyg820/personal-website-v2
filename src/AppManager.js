import App from "./App";
import { create } from "zustand";
import React  from 'react';

export const globalStore = create((set) => ({
    navigation: {
        visible: false,
        setVisible: (value) =>
        set((state) => ({
            navigation: {...state.navigation, visible: value}
        }))
    }
}))

export default function AppManager() {
    return (
        <App />
    );
}