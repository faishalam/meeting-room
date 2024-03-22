## meeting-room

Membuat aplikasi meeting room. 
- User harus melakukan registrasi terlebih dahulu agar bisa menambahkan clientnya
- Jika sudah menambahkan client, maka user bisa membooking meeting room, dan bisa memilih siapa client-nya yang membooking

Terdapat 2 role (Default Value => User)
- Users : CRUD (Login, Register, Client, Booking)
- Admin(Seeding) : CRUD (Login, Room)


### Struktur Folder
- [x] server: untuk menyimpan aplikasi server nodejs
- [x] Client: untuk menyimpan aplikasi react js

### Relation
Many-to-Many dan one-to-many (ERD terdapat di repo)

### Fitur

Server : 
    User
      - [x] Fitur Register
      - [x] Fitur Login
      
     Client
      - [x] FItur Add Client
      - [x] Fitur Delete Client
      - [x] Fitur Edit Client
      - [x] Fitur Fetch Data
      - [x] Fitur Fetch Data By Id
      
    Room Usage
      - [x] FItur Add Booking
      - [x] Fitur Delete Booking
      - [x] Fitur Edit Booking
      - [x] Fitur Fetch Data
      - [x] Fitur Fetch Data By Id
      
     Room
      - [x] FItur Add Room (admin)
      - [x] Fitur Delete Room (admin)
      - [x] Fitur Edit Room (admin)
      - [x] Fitur Fetch Data (admin)
      - [x] Fitur Fetch Data By Id (admin)

Client : 
    User
      - [x] Fitur Register
      - [x] Fitur Login

     Client
      - [x] FItur Add Client
      - [x] Fitur Delete Client
      - [x] Fitur Edit Client
      - [x] Fitur Fetch Data
      
    Room Usage
      - [x] FItur Add Booking
      - [x] Fitur Delete Booking
      - [x] Fitur Fetch Data

     Room
      - [x] FItur Add Room (Admin)
      - [x] Fitur Delete Room
      - [x] Fitur Fetch Data

    

  

