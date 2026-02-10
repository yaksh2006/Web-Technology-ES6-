// Copy and update an object using spread operator

const MyProfile = {
    Name: "Yaksh Kumar",
    Class: "4C",
    College: "KIET",
};
const MyUpdatedProfile = {
    ...MyProfile,
    CGPA: "8.16"
};

console.log("My profile is: ", MyProfile);
console.log("My updated profile is: ", MyUpdatedProfile);