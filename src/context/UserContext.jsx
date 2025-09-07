import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userAttendance, setUserAttendance] = useState({});

    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            const userData = JSON.parse(savedUser);
            setUser(userData);
            loadUserAttendance(userData.email);
        }
    }, []);

    const loadUserAttendance = (userEmail) => {
        const attendanceKey = `attendance_${userEmail}`;
        const savedAttendance = localStorage.getItem(attendanceKey);
        if (savedAttendance) {
            setUserAttendance(JSON.parse(savedAttendance));
        } else {
            setUserAttendance({});
        }
    };

    const saveUserAttendance = (attendanceData) => {
        if (!user) return;
        
        const attendanceKey = `attendance_${user.email}`;
        localStorage.setItem(attendanceKey, JSON.stringify(attendanceData));
        setUserAttendance(attendanceData);
    };

    const updateUser = (userData) => {
        const { email, password, ...userDetails } = userData;
        const userInfo = { ...userDetails, email };
        
        setUser(userInfo);
        localStorage.setItem('currentUser', JSON.stringify(userInfo));
        loadUserAttendance(email);
    };

    const logout = () => {
        setUser(null);
        setUserAttendance({});
        localStorage.removeItem('currentUser');
    };

    return (
        <UserContext.Provider value={{ 
            user, 
            userAttendance, 
            updateUser, 
            saveUserAttendance, 
            logout 
        }}>
            {children}
        </UserContext.Provider>
    );
};