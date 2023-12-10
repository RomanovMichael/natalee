<template>
	<Popup col="7">
		<h4 class="popup-subscribe__title"><b>Выберите разделы на которые<br> хотите подписаться:</b></h4>
		<div class="subscribe__form mt-40">
			<Form method="post">
				<input type="hidden" name="type" value="subscribe">
				<div class="popup-subscribe__list grid --gap-16 --temp-col-2">
					<div class="popup-subscribe__list-col grid --gap-16">
						<label class="checkbox popup-subscribe__item" v-for="(item, index) in getSubSectionsForSubscribe.firstCol" :key="index">
							<input type="checkbox">
							<div class="popup-subscribe__item-inner flex --align-start" v-if="item.title">
								<div class="popup-subscribe__item-trigger checkbox__trigger"></div>
								<div class="popup-subscribe__item-label p --m " v-html="item.title"></div>
							</div>
						</label>
					</div>
					<div class="popup-subscribe__list-col grid --gap-16">
						<label class="checkbox popup-subscribe__item" v-for="(item, index) in  getSubSectionsForSubscribe.secondCol" :key="index">
							<input type="checkbox">
							<div class="popup-subscribe__item-inner flex --align-start" v-if="item.title">
								<div class="popup-subscribe__item-trigger checkbox__trigger"></div>
								<div class="popup-subscribe__item-label p --m " v-html="item.title"></div>
							</div>
						</label>
					</div>
				</div>
				<div class="flex">
					<button type="submit" class="subscribe__btn btn --fill-1 --fix-white-bg feedback btn-success --xl mt-48">
						<span>Подписаться</span>
					</button>
				</div>
			</Form>
		</div>
	</Popup>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	computed: {
		getSubSectionsForSubscribe() {
			if(this.$store.getters['sections/getSubSectionsForSubscribe'].firstCol || this.$store.getters['sections/getSubSectionsForSubscribe'].secondCol) {
				return this.$store.getters['sections/getSubSectionsForSubscribe'];
			}
		},
	}
}
</script>

<style>
.popup-subscribe__title {
	margin: 0;
}

.subscribe__btn {
	width: 100%;
}

.popup-subscribe__item-label {
	color:#212121;
	font-weight: 500;
	margin-left: 1.125rem;
}

.popup-subscribe__item-inner {
	flex-wrap: nowrap;
}

.popup-subscribe__item-trigger {
	flex-shrink: 0;
	width: 1.125rem;
	height: 1.125rem;
	box-shadow: inset 0 0 0 0.125rem rgba(33, 33, 33, 0.15) !important;
	background-size: 61%;
}

</style>
