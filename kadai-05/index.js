const profile = {
  firstName: "Momoko",
  familyName: "Kato",
  age: 25,
  hobby: "Comic",
  major: "Psychology",
};

const keys = Object.keys(profile);


// of キーワードで簡単にループをかける
for (let key of keys) {
  const value = profile[key];
  const text = "私の" + key + "は、" + value + "です。";
  console.log(text);
}