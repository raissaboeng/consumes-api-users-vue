<template>
  <div class="card">
    <div class="buttons">
      <button class="expand" @click="expand = !expand">
        <i v-if="expand" class="fas fa-angle-double-up"></i>
        <i v-else class="fas fa-angle-double-down"></i>
        <h3>{{ user.name }}</h3>
      </button>
      <button v-if="expand" @click="$emit('handle-delete')" type="button">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    <div class="main">
      <p>
        <strong><i class="fas fa-building"></i> Company name: </strong
        >{{ user.company.name }}
      </p>
      <p>
        <strong><i class="fas fa-at"></i> Email: </strong>{{ user.email }}
      </p>
      <br />
    </div>
    <div class="details" v-if="expand">
      <div class="column1">
        <p>
          <strong><i class="fas fa-user-circle"></i> User: </strong
          >{{ user.username }}
        </p>
        <p>
          <strong><i class="fas fa-phone"></i> Phone: </strong>{{ user.phone }}
        </p>
        <p>
          <strong><i class="fas fa-link"></i> Website: </strong
          >{{ user.website }}
        </p>
        <p>
          <strong> <i class="fas fa-quote-right"></i> Catch Phrase: </strong
          >{{ user.company.catchPhrase }}
        </p>
        <p>
          <strong> <i class="fas fa-briefcase"></i> Business: </strong
          >{{ user.company.bs }}
        </p>
      </div>
      <div class="column2">
        <p>
          <strong><i class="fas fa-map-marker-alt"></i> Address</strong>
        </p>
        <p><strong>Street: </strong>{{ user.address.street }}</p>
        <p><strong>Suite:</strong> {{ user.address.suite }}</p>
        <p><strong>City:</strong> {{ user.address.city }}</p>
        <p><strong>Zipcode: </strong>{{ user.address.zipcode }}</p>
        <p>
          <strong>Geo: </strong>
          Lat {{ user.address.geo.lat }} Lng {{ user.address.geo.lng }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonItem",
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      expand: false,
    };
  },
};
</script>

<style scoped>
.card {
  min-width: 300px;
  width: 50%;
  margin: 0.5rem;
  padding: 0.8rem;
  border-radius: 0 15px 15px;
  box-shadow: 2px 8px 10px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
}

button {
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  background: none;
  color: #474A51;
  opacity: 0.8;
  margin-right: 0.5rem;
  text-align: end;
}

button:hover {
  opacity: 1;
}

.buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(179, 179, 179);
}

.expand {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

h3 {
  width: 100%;
  font-size: 1.1rem;
  color: #474A51;
  margin-left: 0.8rem;
}

.details {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

div {
  display: block;
  width: 50%;
  text-align: start;
}

.column1 {
  margin-right: 5px;
}

p {
  line-height: 1.5rem;
}

strong {
  color: #474A51;
}

p i {
  width: 15px;
  height: 15px;
}
</style>
