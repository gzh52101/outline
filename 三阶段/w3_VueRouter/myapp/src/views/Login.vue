<template>
  <div>
    <h1>用户登录</h1>
    <el-form
      :model="formData"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      status-icon
    >
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input v-model="formData.username" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          type="password"
          v-model="formData.password"
          show-password
        />
      </el-form-item>
      <el-form-item
        label="验证码"
        prop="vcode"
      >
        <el-input v-model="formData.vcode">
          <template v-slot:append>
            <span
              v-html="imgvcode"
              @click="getVcode"
              class="vcode"
            ></span>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      imgvcode: "",
      formData: {
        username: "",
        password: "",
        vcode: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        vcode: [{ required: true, message: "请求输入验证码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        // valid 为boolean，表示表单是否校验通过
        console.log("valid", valid);
        if (valid) {
          const { username, password, vcode } = this.formData;
          this.$request
            .post("/login", {
              username,
              password,
              vcode
            })
            .then(data => {
              if (data.code === 200) {
                const { targetUrl = "/mine" } = this.$route.query;

                // localStorage.setItem("userInfo", JSON.stringify(data.data));
                this.$store.commit("login", data.data);
                
                this.$router.push(targetUrl);
              } else if (data.code === 401) {
                this.$message.error("验证码错误");
              }
            });
        }
      });
    },
    getVcode() {
      this.$request.get("/vcode/picture").then(data => {
        this.imgvcode = data.data;
      });
    }
  },
  created() {
    console.log("Login=", this);
    // hard code
    this.getVcode();
  }
};
</script>
<style>
.vcode {
  display: block;
  margin: 0 -20px;
  width: 120px;
  height: 38px;
  overflow: hidden;
}
.vcode svg {
  width: 120px;
  height: 40px;
}
</style>

