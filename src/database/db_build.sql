BEGIN;

DROP TABLE IF EXISTS volunteer;

CREATE TABLE volunteer (
  id        SERIAL  PRIMARY KEY,
  name      VARCHAR(100)   NOT NULL,
  category  VARCHAR(100)   NOT NULL,
  address   VARCHAR(100)   NOT NULL,
  email     VARCHAR(60)    NOT NULL,
  phone     VARCHAR(20)    NOT NULL,
  image     TEXT
);

INSERT INTO volunteer (name, category, address, email, phone, image)
VALUES
('Cornerstone Community Kitchen', 'Soup Kitchen', '7 Vandeventer Ave. Princeton', 'office@princetonumc.org', '609-924-2613', 'images/corner.jpg'),
('SAVE', 'Animal Shelter', '1010 Route 601, Skillman', 'save@savehomelessanimals.org', '609-309-5214', 'images/save.jpg'),
('Mercer Street Friends', 'Assists residents who face poverty', '1201 West State St., Trenton', 'lbanks@mercerstreetfriends.org ', '609-656-5220', 'images/mercer.jpg'),
('One Simple Wish', 'Helps foster children', '1977 North Olden Ave, Trenton', 'info@onesimplewish.org', '609-883-8484', 'images/wish.jpg'),
('HomeFront', 'Ending homelessness in Central New Jersey', '1880 Princeton Avenue Lawrenceville', 'getinvolved@homefrontnj.org', '609-989-9417', 'images/home.jpg'),
('Senior Care Ministry of Princeton', 'Senior Care', 'P.O. Box 1517 Princeton, NJ', 'info@seniorcareministry.org', '609-921-8888', 'images/senior.png');

COMMIT;
