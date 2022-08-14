<template>
    <div class="sidebar-page">
        <section class="sidebar-layout">
             <b-sidebar
                position="static"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                type="is-light"
                open
            >
                <div class="p-1">
                    <div class="block">
                    <img
                        src="../assets/long.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    />
                    </div>
                    <!-- has-text-centered -->
                    <b-menu class="is-custom-mobile has-text-centered">
                        <b-menu-list label="Підібрати">
                            <section id="sc">
        <b-field>
            <b-radio v-model="radio"
                native-value="All">
                All
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="45Ah"
                type="is-info">
                45Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="50Ah"
                type="is-success">
                50Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="60Ah"
                type="is-danger">
                60Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="63Ah"
                type="is-warning">
                63Ah
            </b-radio>
        </b-field>
        <b-field>
        <b-radio v-model="radio"
                native-value="67Ah">
                67Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="74Ah"
                type="is-info">
                74Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="75Ah"
                type="is-success">
                75Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="77Ah"
                type="is-danger">
                77Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="78Ah"
                type="is-danger">
                78Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="80Ah"
                type="is-warning">
                80Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="88Ah"
                type="is-danger">
                88Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="90Ah"
                type="is-warning">
                90Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="100Ah"
                type="is-warning">
                100Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="110Ah"
                type="is-warning">
                110Ah
            </b-radio>
        </b-field>
        <b-field>
            <b-radio v-model="radio"
                native-value="120Ah"
                type="is-danger">
                120Ah
            </b-radio>
        </b-field>
    </section>
                        </b-menu-list>
                        <b-menu-list>
                            <b-menu-item label="Expo" icon="link"></b-menu-item>
                        </b-menu-list>
                        <b-menu-list label="Actions">
                            <b-menu-item icon="logout" label="Logout"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>

        </section>
    </div>
</template>

<script>

export default {
  data() {
    return {
      expandOnHover: false,
      mobile: "reduce",
      reduce: false,
      radio: 'all',
    };
  },
  
   watch: {

  radio() {
      this.$store.dispatch("filterProducts", this.radio)
}
   
    }
}

</script>

<style lang="scss">
.p-1 {
  padding: 1em;
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    // min-height: 100vh;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
        // min-height: 100vh;
    }
}

@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
.is-mini-expand {
    .menu-list a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
