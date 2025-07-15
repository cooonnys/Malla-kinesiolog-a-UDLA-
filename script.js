body {
  margin: 0;
  font-family: sans-serif;
  background: linear-gradient(to bottom right, #77212E, #4A2C28);
  color: white;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

#grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 15px;
  padding: 10px;
}

.course {
  background-color: #4A2C28;
  border: 2px solid #77212E;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.course.locked {
  opacity: 0.4;
  cursor: not-allowed;
}

.course.completed {
  background-color: #77212E;
  color: #fff;
  border: 2px solid #fff;
}
